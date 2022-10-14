import React, { MouseEventHandler, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Entrada from "./Entrada";


interface ModalAlunos {
    modalIncluir: boolean   
    abrirFecharModalIncluir: () => void
    adicionarNovoAluno: (nome: string, email: string, idade: number) => any
}



export default function ModalAlunos({ modalIncluir, abrirFecharModalIncluir, adicionarNovoAluno }: ModalAlunos) {
    const id = 0;
    const [nome, setNome] = useState<string>("");
    const [idade, setIdade] = useState<number>(0);
    const [email, setEmail] = useState<string>("");

    return (
        <Modal isOpen={modalIncluir}>
            <ModalHeader>
                Incluir Alunos
            </ModalHeader>

            <ModalBody>
                <Entrada texto="Nome" tipo="text" valor={nome} setValor={setNome}/>
                <Entrada texto="Idade" tipo="text" valor={idade} setValor={setIdade} />
                <Entrada texto="E-mail" tipo="text" valor={email} setValor={setEmail} />
            </ModalBody>

            <ModalFooter>
                <button className="btn btn-primary" onClick={() => adicionarNovoAluno(nome,email,idade)}>Incluir</button>{" "}
                <button className="btn btn-danger" onClick={abrirFecharModalIncluir}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )
}