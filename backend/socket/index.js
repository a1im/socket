import socket from 'socket.io'
import apiModels from '../api/api-models'


export default (httpServer) => {
    const io = socket(httpServer);

    io.on('connection', socket => {
        console.log('user connected');

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('api-dict', async resp => {
            try {
                if (!resp || !resp.command) return;
                let result = null;
                switch (resp.command) {
                    case 'save':
                        result = await apiModels.save(resp);
                        io.emit('api-dict', result.ops);
                        console.log(result);
                        break;
                    case 'delete':
                        break;
                    case 'fetchAll':
                        result = await apiModels.fetchAll(resp);
                        socket.emit('api-dict-fetch-all', result);
                        break;
                }
            } catch(e) {
                console.log(e);
            }
        })
    });
}