import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"

@Entity({
    name:"credentials"
})
export class Credential{ 
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        unique:true
    })
    username:string

    @Column()
    password:string    
}

export default Credential;