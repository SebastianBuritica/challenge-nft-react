import { useState, useEffect } from 'react'
import axios from 'axios'


const DataFetching = () => {
  
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0xC0a89EfDF9D035A02F68151F053307130C303555')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(Error)
    })

    return (
    <div>
        <ul>
        {
            posts.map(post => <li key={post.id}>{post.title}</li>)
        }
        </ul>
    </div>
  )
}

export default DataFetching