import React, { Component } from 'react'
import Posts from '../../components/news/posts'
import './style.css'

class News extends Component {

    componentDidMount () {
        this.props.getNews()
    }

    mapPosts() {
        console.log(this.props.news.articles)
        if(this.props.news.articles !== undefined) {
            return (
                this.props.news.articles.map((article, index) => {
                    console.log(article)
                    return (
                        <Posts key={index} title={article.title} description={article.description}/>
                    )
                })
            )
        }
    }

    render() {
        return (
            <div className="newsContainer">
                {this.mapPosts()}
            </div>
        )
    }
}

export default News