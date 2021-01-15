// @ts-ignore
import ClCrudNext from "cl-crud-next"


export default function ({app, crud}: any) {
    app.use(ClCrudNext, crud)
}