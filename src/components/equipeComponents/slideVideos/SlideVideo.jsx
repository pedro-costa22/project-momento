import { useState } from 'react';
import './SlideVideo.css'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Apresentacao from './Apresentacao';
import aline from '../../../img/aline.png';
import felype from '../../../img/felype.png';
import carlos from '../../../img/carlos.png';
import lucca from '../../../img/lucca.png';
import leo from '../../../img/leonardo.png';
import gabi from '../../../img/gabi.png';
import rapha from '../../../img/rapha.png';



function SlideVideo(){

    const [scrollSlide, setScrollSlide] = useState(0);
    const alineMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/K6WfjaulJkE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const felypeMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/Xe6UGSAaImM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const carlosMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/Yb66BZ09-wk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const luccaMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/u93jloDOpTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const leoMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/6zcrcYnHTQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const gabiMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/l9Raws5fcS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    const raphaMovie = <iframe width="950" height="450" src="https://www.youtube.com/embed/CYpq0PNAJcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    const handleLeftArrow = () => {
        let scrollX = scrollSlide + 2340;
        
        if(scrollX > 0 ){
            scrollX = 0
        }

        setScrollSlide(scrollX);
    }

    const handleRightArrow = () => {
        let scrollX = scrollSlide - 2340;
       
        if(scrollX < -14040) {
            scrollX = -14040
        }

        setScrollSlide(scrollX)
    }




    return(
        <div>
            <div className='contVideo'>
                <div className='slideVideos'>
                  <div className='slideItems' style={{
                    marginLeft: scrollSlide,
                    width: 1170
                  }}>
                        <Apresentacao 
                            hard="Front End"
                            nome="Aline Gallo "
                            funcao="DB Developer"
                            avatar={aline}
                            movie={alineMovie}
                            soft="Apresenta????o"
                            textOne="Essa ?? uma soft skill que tamb??m ?? um subt??pico da capacidade de comunica????o. No caso, consiste na habilidade de apresentar adequadamente o fruto de seu trabalho, suas conclus??es e recomenda????es, explicar conceitos."
                            textTwo="De pouco adianta deter o conhecimento do universo da programa????o ou do banco de dados, se esse conte??do fica trancado dentro da sua caixa craniana."
                            />

                            <Apresentacao 
                            hard="Front End"
                            nome="Felype Nunes"
                            funcao="Dev IA"
                            avatar={felype}
                            movie={felypeMovie}
                            soft="Comunica????o"
                            textOne="Para melhor desenvolver a comunica????o, procure entender a pessoa que est?? do outro lado da 
                            conversa e sutilmente molde uma mensagem para que seja absorvida da melhor maneira por ela."
                            textTwo="?? importante desenvolver, tamb??m, a escuta e respeitar o espa??o de fala do outro, prestando aten????o 
                            e absorvendo o que ?? dito antes de pensar diretamente no que voc?? vai responder."
                            />

                            <Apresentacao 
                            hard="Back End"
                            nome="Carlos Gabriel"
                            funcao="Dev Backend"
                            avatar={carlos}
                            movie={carlosMovie}
                            soft="Flexibilidade"
                            textOne="Cada vez mais o mercado exige que os profissionais saibam se reinventar. Novas demandas surgem a cada dia, tanto para futuros desafios quanto para cargos j?? em vig??ncia. "
                            textTwo="Para ser um talento de destaque, ?? necess??rio mostrar essa versatilidade tanto no curr??culo quanto na sua rotina empresarial e emocional."
                            />

                            <Apresentacao 
                            hard="Front End"
                            nome="Lucca Macedo"
                            funcao="Dev Backend"
                            avatar={lucca}
                            movie={luccaMovie}
                            soft="Criatividade"
                            textOne="Criatividade ?? algo que n??o se aprende em curso ou faculdade, mas que voc?? precisa. Pensar fora da caixa exige conhecimento, obviamente. ?? preciso conhecer as regras para poder quebr??-las e ir al??m. "
                            textTwo="Mas tamb??m ?? preciso coragem e admitir que deixar a imagina????o fluir pode ser uma solu????o mais r??pida que uma visitinha ao StackOverflow."
                            />

                            <Apresentacao 
                            hard="Back End"
                            nome="Leonardo Lima"
                            funcao="Dev Jr"
                            avatar={leo}
                            movie={leoMovie}
                            soft="Olhar cr??tico"
                            textOne="Certamente, voc?? j?? ouviu falar nesse termo, mas pode n??o ter certeza sobre o que ?? pensamento cr??tico de fato. Existem v??rias defini????es mas, na maioria das vezes, envolve o processo de analisar os fatos para formar um julgamento."
                            textTwo="Ser capaz de tomar decis??es assertivas com base em uma abordagem objetiva, precisa e justa ?? uma habilidade valiosa. Seja no meio acad??mico, pessoal ou profissional. Nesse ??ltimo meio, torna-se ainda mais importante."
                            />

                            <Apresentacao 
                            hard="Banco de dados"
                            nome="Gabriela"
                            funcao="Dev FrontEnd"
                            soft="Organiza????o"
                            avatar={gabi}
                            movie={gabiMovie}
                            textOne="Fundamental para aumento da efici??ncia e qualidade do trabalho. Ser um profissional organizado faz com que haja economia de tempo, pois as informa????es s??o encontradas de forma mais r??pida. "
                            textTwo="Al??m disso, voc?? diminui sua suscetibilidade aos erros relacionados ?? desaten????o. Dessa forma, o profissional passa uma imagem de maior compet??ncia, podendo influenciar de maneira positiva os colegas."
                            />

                            <Apresentacao 
                            hard="Seguran??a da informa????o"
                            nome="Raphael"
                            funcao="Dev FrontEnd"
                            soft="Seguran??a"
                            avatar={rapha}
                            movie={raphaMovie}
                            textOne="Possuir fortes instintos de pesquisa e escrita ?? um ativo inestim??vel que cada analista de seguran??a da informa????o deve ter. Essa habilidade ?? ??til quando os especialistas executam a cria????o e aplica????o de pol??ticas. "
                            textTwo="Networking vai muito al??m do lado t??cnico. Esse skill envolve o aproveitamento de suas habilidades sociais e de comunica????o para expandir seus contatos profissionais e se conectar, o que ?? fundamental no desenvolvimento de sua carreira."
                            />
                  </div>
                    
                    
                    
                </div>

                <div className='navgation'>
                    <FaAngleLeft className='iconNavgation' onClick={handleLeftArrow}/>
                    <FaAngleRight className='iconNavgation' onClick={handleRightArrow}/>
                </div>

                
            </div>



        </div>
    )
};

export default SlideVideo