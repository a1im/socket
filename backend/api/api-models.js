import fonc from '../vendor/func'
import models from '../models'
import db from '../db'

export default {
    save(resp) {
        return new Promise((resolve, reject) => {
            if (!resp || !resp.modelName || !models[resp.modelName]) return;
            let dictName = resp.modelName;
            let dict = new models[dictName];
            fonc.setProps(dict.props, resp.props);
            if (resp.props && resp.props._id) {
                console.log('update');
            } else {
                console.log('insert');
                db.get().collection(dictName).insert(dict.props, (err, res) => {
                    if (err) reject(err);
                    else resolve(res);
                })
            }
        })
    },

    delete(resp) {
        return new Promise((resolve, reject) => {
            if (!resp || !resp.modelName || !models[resp.modelName]) return;
            let dictName = resp.modelName;
            let dict = new models[dictName];

        })
    },

    fetchAll(resp) {
        return new Promise((resolve, reject) => {
            if (!resp || !resp.modelName || !models[resp.modelName]) return;
            let dictName = resp.modelName;
            db.get().collection(dictName).find().toArray((err, docs) => {
                if (err) reject(err);
                else resolve(docs);
            })
        })
    },

    fetchOne(resp) {
        return new Promise((resolve, reject) => {
            if (!resp || !resp.modelName || !models[resp.modelName]) return;
            let dictName = resp.modelName;
            let dict = new models[dictName];

        })
    },
}