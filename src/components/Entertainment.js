import React, { Component } from 'react';
import NewsItem from './NewsItem';
import './Project1.css';
import Loader from './Loader';

export class News extends Component {  
    
     

   
      constructor(){
        
        super()     
        this.state= {
            articles : [],
            loading : false,
            page:1,
            
        }

        


      }

      


      async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=b7e41f261997465fa5f82fd8353a16f7&pageSize=12&page=${this.state.page}`
        this.setState({loading:true})
        let data = await fetch(url);
        let dataNew = await data.json()
        this.setState({loading:false})
        this.setState({articles : dataNew.articles, totalResult : dataNew.totalResults})
        

      }

      


      nextPage = async() => {
          if (this.state.page+1 > Math.ceil(this.state.totalResult/12) ){
            


          }else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b7e41f261997465fa5f82fd8353a16f7&pageSize=12&page=${this.state.page+1}`
            this.setState({loading:true})
            let data = await fetch(url);
            let dataNew = await data.json()
            this.setState({
            page:this.state.page +1,
            articles : dataNew.articles,
            loading:false
        })

          }

        
      }

      previousPage = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b7e41f261997465fa5f82fd8353a16f7&pageSize=12&page=${this.state.page - 1}`
        this.setState({loading:true})
        let data = await fetch(url);
        let dataNew = await data.json()

        this.setState({
          page:this.state.page -1,
          articles : dataNew.articles,
          loading:false
        })
      }

      

  render() {  

    
    return ( 
    <div>
        <div className="container loader">
          {this.state.loading && <Loader/>}
        </div>
        <div className="cont">
          
                {!this.state.loading && this.state.articles.map((elem)=>{
                    return <NewsItem key = {elem.url} title = {elem.title} description = {elem.description} imageurl = {elem.urlToImage} newsUrl = {elem.url}/>
                })}
          </div>
          <div className="btnbox d-flex justify-content-around">
                  <button disabled= {this.state.page===1} type="button" className="btn btn-success" onClick={this.previousPage}>&larr;Previous</button>
                  <button disabled= {this.state.page+1 > Math.ceil(this.state.totalResult/12)} type="button" className="btn btn-success" onClick={this.nextPage}>Next&rarr;</button>
           </div>
      </div>
      );
  }
}

export default News;
