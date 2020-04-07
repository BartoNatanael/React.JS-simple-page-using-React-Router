import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam laborum expedita eveniet vitae saepe, ullam dolores sunt. Harum sint, dicta nobis ab vero repudiandae, ea voluptatem soluta perferendis molestiae mollitia?'
    },
    {
        id: 2,
        title: "Kim jest mama hipopotama?",
        author: "Jan Nowak",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam laborum expedita eveniet vitae saepe, ullam dolores sunt. Harum sint, dicta nobis ab vero repudiandae, ea voluptatem soluta perferendis molestiae mollitia?'
    },
    {
        id: 3,
        title: "Dokąd nocą tupta jeż?",
        author: "Jan Nowak",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam laborum expedita eveniet vitae saepe, ullam dolores sunt. Harum sint, dicta nobis ab vero repudiandae, ea voluptatem soluta perferendis molestiae mollitia?'
    }
]

const HomePage = () => {

    const ArtList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">
            {ArtList}
        </div>
     );
}
 
export default HomePage;