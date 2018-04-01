import models from '@/../../../backend/models'

export default {
    install: (Vue, options = {}) => {
        Vue.prototype.$model = {
            create(dict) {
                return new models[dict]
            }
        };
    }
}