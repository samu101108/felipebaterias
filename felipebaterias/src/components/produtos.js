import React from 'react'
// import Car from '../img/iconCar.png'
import { Collapsible,CollapsibleItem } from 'react-materialize'
const produtos = () => (
<div>
<Collapsible accordion defaultActiveKey={4}>
<CollapsibleItem header="LINHA SUPER FREE">
<h5>
Heliar Super Free tem a tecnologia PowerFrame, que garante maior resistência à corrosão e mais energia para a sua bateria. Por isso, é a mais indicada pelos especialistas. Na compra de uma bateria Heliar Super Free, você conta com a Proteção 24 horas em caso de pane elétrica, com direito a guincho, mesmo que o problema não seja na bateria. Esse benefício exclusivo já vale o investimento. 
UMA BATERIA COM TODOS ESSES DIFERENCIAIS SÓ PODERIA SER SUPER.
</h5>
</CollapsibleItem>
<CollapsibleItem header="LINHA ORIGINAL">
<h5>
A Heliar Original possui a tecnologia PowerFrame,
que garante mais resistência e autonomia para a sua bateria
e garantia de 18 meses. Por isso, é a bateria testada 
e aprovada mundialmente pelas montadoras.
SEU CARRO MERECE A ORIGINAL.
</h5>
</CollapsibleItem>
<CollapsibleItem header="LINHA MOTO">
<h5>
A linha Heliar Frota é ideal para caminhões e máquina agrícolas. 
Além de ser preparada para veículos de alto desempenho, oferece o melhor
 custo-benefício por quilômetro rodado. Heliar Frota tem maior vida útil
porque possui um sistema de absorção de impacto, ideal para suportar as aplicações mais severas.
QUANDO O NEGÓCIO É CARGA PESADA, ESTA É A SUA BATERIA
</h5>
</CollapsibleItem>
<CollapsibleItem header="LINHA FROTA">
<h5>
A linha Heliar Frota é ideal para caminhões e máquina agrícolas.
Além de ser preparada para veículos de alto desempenho, oferece o melhor 
custo-benefício por quilômetro rodado. Heliar Frota tem maior vida útil 
porque possui um sistema de absorção de impacto, ideal para suportar as aplicações mais severas.
</h5>
</CollapsibleItem>
</Collapsible>
</div>
)
export default produtos