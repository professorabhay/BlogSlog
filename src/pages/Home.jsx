import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                setLoading(false);
            }
        })
    }, [])

    if (loading) {
        return (
          <div className="w-full py-8 mt-4 text-center min-h-screen">
            <Container>
              <div className="flex flex-wrap">
                <div className="p-2 w-full h-full">
                  <h1 className="text-2xl font-bold hover:text-gray-500">Loading...</h1>
                </div>
              </div>
            </Container>
          </div>
        );
      }
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center min-h-screen">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full h-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login To Create Post
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home