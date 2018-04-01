export default {
    setProps(resultProps, props) {
        if (props) {
            for(let prop in resultProps) {
                if (props[prop] !== undefined) resultProps[prop] = props[prop];
            }
        }
    }
}