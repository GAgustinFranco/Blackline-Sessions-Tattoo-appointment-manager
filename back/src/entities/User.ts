import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany } from "typeorm"
import { Credential } from "./Credential"
import Appointment from "./Appointment"


@Entity({
    name:"users"
})
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({
        unique:true
    })
    email:string

    @Column()
    birthdate:Date

    @Column({
        unique:true
    })
    nDni: number

    @Column()
    credentialsId: number

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Appointment, (appointments) => appointments.user)
    appointments: Appointment[]
}

export default User;