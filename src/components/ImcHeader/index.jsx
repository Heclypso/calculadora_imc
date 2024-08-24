import React, { useState, useEffect } from 'react';
import styles from './ImcHeader.module.css';

const ImcHeader = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    useEffect(() => {
        if (peso && altura) {
            const pesoNum = parseFloat(peso);
            const alturaNum = parseFloat(altura);

            if (!isNaN(pesoNum) && !isNaN(alturaNum) && alturaNum > 0) {
                const alturaMetros = alturaNum / 100;
                const imcCalculado = pesoNum / (alturaMetros * alturaMetros);
                const imcFormatado = imcCalculado.toFixed(1);
                setImc(imcFormatado);

                if (imcCalculado < 18.5) {
                    setClassificacao('Baixo peso');
                } else if (imcCalculado >= 18.5 && imcCalculado <= 24.9) {
                    setClassificacao('Peso normal');
                } else if (imcCalculado >= 25 && imcCalculado <= 29.9) {
                    setClassificacao('Sobrepeso');
                } else if (imcCalculado >= 30 && imcCalculado <= 34.9) {
                    setClassificacao('Obesidade grau I');
                } else if (imcCalculado >= 35 && imcCalculado <= 39) {
                    setClassificacao('Obesidade grau II');
                } else {
                    setClassificacao('Obesidade grau III');
                }
            } else {
                setImc(null);
                setClassificacao('');
            }
        } else {
            setImc(null);
            setClassificacao('');
        }
    }, [peso, altura]);

    return (
        <header>
            <h1>Calculadora de IMC</h1>
            <div className={styles.container}>
                <input id='peso' type="text" placeholder="Digite o seu peso" alt='input de peso' value={peso} onChange={(e) => setPeso(e.target.value)}/>
                
                <input id='altura' type="text" placeholder="Digite a sua altura" alt='input de altura' value={altura} onChange={(e) => setAltura(e.target.value)} />
            </div>
            {imc !== null && (
                <p>Seu IMC é: {imc}</p>
            )}
            {classificacao && (
                <p>Classificação: {classificacao}</p>
            )}
        </header>
    );
}

export default ImcHeader;
