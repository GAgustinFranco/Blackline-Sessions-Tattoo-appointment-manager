import { Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import User from "./User";

@Entity({
    name:"appointments"
})
export class Appointment{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    date:Date

    @Column()
    time:string

    @Column()
    status: "active" | "cancelled";

    @ManyToOne(() => User, (user) => user.appointments)
    user: User
}

export default Appointment;