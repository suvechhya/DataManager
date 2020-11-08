import fs from 'fs';

class DataManager {
    constructor(schema = [], data = []) {
        this.schema = schema;
        this.data = data;
    }

    loadData(pathToFile) {
        const data = fs.readFileSync(pathToFile, 'utf8');
        if (data) {
            this.data = JSON.parse(data);
        }
    }

    loadSchema(pathToSchema) {
        const schema = fs.readFileSync(pathToSchema, 'utf8');
        if (schema) {
            this.schema = JSON.parse(schema).schema;
        }
    }

    formulateData(schema, data) {
        let finalData = [];
        for (const item of data) {
            const obj = {};
            for (const { name } of schema) {
                obj[name] = item[name];
            }
            finalData.push(obj);
        }
        return finalData;
    }

    show() {
        console.table(this.formulateData(this.schema, this.data));
    }

    select(condition) {
        const filteredData = this.data.filter((item) => eval(`item.${condition}`));
        return new DataManager(this.schema, filteredData);
    }

    project(columns) {
        const schema = this.schema.filter((field) => columns.includes(field.name));
        return new DataManager(schema, this.data);
    }

    groupBy(column) {
        const columnsRequired = this.schema.filter((col) => col.type === 'measure' || col.name === column);
        const filteredData = this.formulateData(columnsRequired, this.data);
        const groupedData = Array.from(
            filteredData.reduce((m, o) => {
                var temp = m.get(o[column]);
                if (!temp) {
                    m.set(o[column], temp = {});
                }
                Object.entries(o).forEach(([k, v]) => {
                    if (k === column) {
                        return;
                    }
                    temp[k] = temp[k] || { sum: 0, count: 0 };
                    temp[k].sum += v;
                    temp[k].count++;
                });
                return m;
            }, new Map),
            ([k, v]) => Object.assign({ [column]: k }, ...Object.entries(v).map(([l, { sum, count }]) => ({ [l]: +(sum / count).toFixed(1) })))
        );
        return new DataManager(columnsRequired, groupedData);
    }
}

export default DataManager;