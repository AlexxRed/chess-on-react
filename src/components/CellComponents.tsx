import { FC } from "react"
import { Cell } from "../models/Cell"

interface CellProps{
    cell: Cell
}

const CellComponent: FC<CellProps> = ({cell: Cell}) => {
    return (
        <div className={['cell', Cell.color].join(' ')}>
            {Cell.figure?.logo && <img alt="" src={ Cell.figure.logo }/>}
        </div>
    )
}

export default CellComponent