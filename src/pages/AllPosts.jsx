import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'


function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect (() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if(posts) {
            setPosts(posts.documents)
            setLoading(false);
        }
    })
  return (
    <div className='w-full py-8 min-h-screen'>
        <Container>
        {loading ? (
          <div className='text-center'>
            <p>Loading...</p>
          </div>
        ) : (
          <div className='flex flex-wrap min-h-screen'>
            {posts.map((post) => (
              <div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}

        </Container>
    </div>
  )
}

export default AllPosts