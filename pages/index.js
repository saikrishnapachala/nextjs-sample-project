import React,{useState,useEffect} from 'react';
import {BASE_URL} from '../components/Urls';
import Layout from '../components/Layout';

const IndexPage =()=>{

  const [state, setstate] = useState([])


  useEffect(() => {
      let url = `${BASE_URL}pages?slug=welcome`
      fetch(url)
      .then(data => data.json())
      .then(data=>{
          setstate(data)
      })
  },[])

  console.log('state:',state)
  return(
       <>
          <Layout/>      
          { state.map((el, index) => 
             <div key={index} >
                  <h4>{el.title.rendered}</h4>
                  <p dangerouslySetInnerHTML={{__html: el.content.rendered}}/> 
                </div>
       
        )}
       </>
  )
}

export default IndexPage;