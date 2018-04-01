import socket from 'socket.io-client'

export default {
    install: (Vue, options = {}) => {
        let io = socket(options.url ? options.url : '');


        io.on('connect', () => {
            console.log(io.id);
        });

        io.on('api-dict', resp => {
            console.log('resp', resp);
        });

        io.on('api-dict-fetch-all', resp => {
            console.log('resp', resp);
        });

        Vue.prototype.$io = {
            get: io,

            emitDictSave(model) {
                io.emit('api-dict', {
                    command: 'save',
                    modelName: model.name,
                    props: model.props,
                });
            },

            emitDictFetchAll(modelName) {
                io.emit('api-dict', {
                    command: 'fetchAll',
                    modelName: modelName
                });
            },
        };
    }
}