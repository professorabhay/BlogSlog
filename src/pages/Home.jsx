import React, { useEffect, useState } from 'react';
import authService from '../appwrite/auth'; // Import authService
import service from '../appwrite/config'; // Import service
import { Container, PostCard } from '../components';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                // Check if the user is logged in using authService
                const user = await authService.getCurrentUser();
                setIsLoggedIn(user !== null); // Set isLoggedIn based on whether user exists
                
                if (user !== null) {
                    // If logged in, fetch posts using service
                    const posts = await service.getPosts();
                    if (posts) {
                        setPosts(posts.documents);
                    }
                }

                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

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

    if (!isLoggedIn) {
        return (
            <div className="w-full py-8 mt-4 text-center min-h-screen">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full h-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Please log in to view posts
                            </h1>
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
                            <h1 className="text-2xl font-bold hover:text-gray-500">No posts available</h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;