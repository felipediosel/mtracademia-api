import { Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey } from 'sequelize-typescript'

@Table({
    tableName: 'contas_receber_pagtos',
    timestamps: false
})
export default class ModelContasReceberPagtos extends Model {

    @AutoIncrement
    @AllowNull(false)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    declare id: bigint

    @AllowNull(true)
    @Column({
        type: DataType.INTEGER,
    })
    declare conta_receber_id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.DATEONLY,
    })
    declare pagto_data: string

    @AllowNull(false)
    @Column({
        type: DataType.NUMBER,
    })
    declare pagto_valor: number
}