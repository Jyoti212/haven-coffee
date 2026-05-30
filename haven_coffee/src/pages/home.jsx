import Card from '../components/card'
import WhyCard from '../components/whycards'
import { useState, useEffect, useRef, useMemo } from 'react'
import SearchBar from '../components/searchbar'



// Static images to cycle through
const whyHavenImages = [
  'https://plus.unsplash.com/premium_photo-1672987719865-b34bae00f8a4?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://static.wixstatic.com/media/3962bf_3e7d7e2d9ec943fb8d93cd7b92943ae7~mv2.png/v1/fill/w_568,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3962bf_3e7d7e2d9ec943fb8d93cd7b92943ae7~mv2.png',
  'https://cdn.shopify.com/b/shopify-brochure2-assets/8d0003d6cba137277341cc3d0d31cd49.png'
]

const menuImages = [
  'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  'https://www.shutterstock.com/image-photo/coffee-cup-rosetta-latte-art-260nw-584430886.jpg',
  'https://images.pexels.com/photos/1023949/pexels-photo-1023949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://www.shutterstock.com/image-photo/glass-ice-coffee-condensed-milk-260nw-2603961855.jpg'
]

const menuButtons = ['try Espresso', 'order Latte', 'try Cappucino', 'try Cold Brew']

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [whyHaven, setWhyHaven] = useState([])
  const [menuItems, setMenuItems] = useState([])
  const [whyHavenLoading, setWhyHavenLoading] = useState(true)
  const [menuLoading, setMenuLoading] = useState(true)
  const [whyHavenError, setWhyHavenError] = useState(null)
  const [menuError, setMenuError] = useState(null)

  useEffect(() => {
    // Fetch Why Haven data from Users API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch Why Haven data')
        return res.json()
      })
      .then(data => {
        const formattedData = data.slice(0, 10).map((user, index) => ({
          userData: user,
          image: whyHavenImages[index % whyHavenImages.length]
        }))
        setWhyHaven(formattedData)
        setWhyHavenError(null)
      })
      .catch(err => {
        console.error('Error fetching why haven data:', err)
        setWhyHavenError(err.message)
        setWhyHaven([])
      })
      .finally(() => setWhyHavenLoading(false))

    // Fetch Menu data from Posts API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch Menu data')
        return res.json()
      })
      .then(data => {
        const formattedData = data.slice(0, 20).map((post, index) => ({
          id: post.id,
          title: post.title,
          desc: post.body,
          image: menuImages[index % menuImages.length],
          button: menuButtons[index % menuButtons.length],
          userId: post.userId
        }))
        setMenuItems(formattedData)
        setMenuError(null)
      })
      .catch(err => {
        console.error('Error fetching menu data:', err)
        setMenuError(err.message)
        setMenuItems([])
      })
      .finally(() => setMenuLoading(false))
  }, [])

  const normalizedSearchMemo = useMemo(() => searchTerm.trim().toLowerCase(), [searchTerm])

  const filteredWhyHaven = useMemo(() => {
    if (!normalizedSearchMemo) return whyHaven
    return whyHaven.filter(item => {
      const name = item.userData?.name?.toLowerCase() || ''
      const email = item.userData?.email?.toLowerCase() || ''
      const username = item.userData?.username?.toLowerCase() || ''
      return (
        name.includes(normalizedSearchMemo) ||
        email.includes(normalizedSearchMemo) ||
        username.includes(normalizedSearchMemo)
      )
    })
  }, [whyHaven, normalizedSearchMemo])

  const filteredMenuItems = useMemo(() => {
    if (!normalizedSearchMemo) return menuItems
    return menuItems.filter(item => {
      const title = item.title?.toLowerCase() || ''
      const desc = item.desc?.toLowerCase() || ''
      return title.includes(normalizedSearchMemo) || desc.includes(normalizedSearchMemo)
    })
  }, [menuItems, normalizedSearchMemo])

  const searchInputRef = useRef(null)
  useEffect(() => {
    searchInputRef.current?.focus()
  }, [])

  const [visibleWhyCount, setVisibleWhyCount] = useState(5)
  const [visibleMenuCount, setVisibleMenuCount] = useState(5)

  // Reset visible counts when search changes
  useEffect(() => {
    setVisibleWhyCount(5)
    setVisibleMenuCount(5)
  }, [searchTerm])

  const visibleWhy = filteredWhyHaven.slice(0, visibleWhyCount)
  const visibleMenu = filteredMenuItems.slice(0, visibleMenuCount)
  return (
    <div>

      {/* Hero Section */}
      <section style={{
        backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/071/010/626/large_2x/freshly-roasted-coffee-beans-scattered-on-a-rustic-surface-free-photo.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '70vh',
        position: 'relative',
        margin: '40px 40px 7px 40px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding: '100px',
      }}>
        <div style={{
          backgroundColor: 'rgba(62, 39, 35, 0.9)',
          color: 'beige',
          padding: '30px',
          maxWidth: '600px',
          borderRadius: '10px',
          alignSelf: 'center',
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '15px' }}>We Brew Passion. We Design Solace</h1>
          <p style={{ fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
            In our cafés, great coffee, comfort food, and warm, Modern Indian-inspired
            architecture come together to create a space that feels like home.We believe great coffee deserves a great atmosphere. That’s why Haven pairs bold, customized brews with warm, Indian-inspired architecture.
          </p>
        </div>
        <div style={{
          backgroundColor: 'rgba(62, 39, 35, 0.9)',
          padding: '15px',
          borderRadius: '10px',
          alignSelf: 'flex-end',
        }}>
          <button style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'beige',
            padding: '12px 30px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '10px',
          }}>
            Explore More →
          </button>
        </div>
      </section>

      {/* Search */}
      <SearchBar ref={searchInputRef} searchTerm={searchTerm} onSearch={setSearchTerm} />

      {/* Why Haven Section */}
      <section style={{ padding: '7px ', backgroundColor: 'beige' }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            color: '#3e2723',
            
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif",
fontWeight: '700',
fontSize: '1.7rem',
padding: '20px 0px',
          }}>
            Why Haven?
          </h2>
          {whyHavenLoading && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#3e2723' }}>
              <div style={{
                fontSize: '48px',
                animation: 'spin 1s linear infinite',
                display: 'inline-block'
              }}>
                ☕
              </div>
              <p style={{ marginTop: '15px', fontSize: '16px' }}>Loading Why Haven...</p>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          )}
          {whyHavenError && (
            <div style={{
              backgroundColor: '#ffebee',
              border: '2px solid #d32f2f',
              color: '#d32f2f',
              padding: '15px 20px',
              borderRadius: '4px',
              textAlign: 'center',
              margin: '20px 0'
            }}>
              ⚠️ Error loading Why Haven: {whyHavenError}
            </div>
          )}
          {!whyHavenLoading && !whyHavenError && (
            <>
              <div className="row">
                {visibleWhy.map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <WhyCard title={item.userData?.name} image={item.image} userData={item.userData} />
                  </div>
                ))}
              </div>
              {filteredWhyHaven.length > visibleWhyCount && (
                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                  <button
                    onClick={() => setVisibleWhyCount(c => c + 5)}
                    style={{
                      backgroundColor: '#3e2723',
                      color: 'beige',
                      border: 'none',
                      padding: '10px 18px',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Our Menu Section */}
      <section style={{ padding: '7px', backgroundColor: 'beige' }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            color: '#3e2723',
            
            letterSpacing: '2px',
            marginBottom: '7px',
            fontFamily: "'Playfair Display', serif",
fontWeight: '700',
fontSize: '1.7rem',
padding: '20px 0px',
          }}>
            Our Menu
          </h2>
          {menuLoading && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#3e2723' }}>
              <div style={{
                fontSize: '48px',
                animation: 'spin 1s linear infinite',
                display: 'inline-block'
              }}>
                ☕
              </div>
              <p style={{ marginTop: '15px', fontSize: '16px' }}>Loading Menu...</p>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          )}
          {menuError && (
            <div style={{
              backgroundColor: '#ffebee',
              border: '2px solid #d32f2f',
              color: '#d32f2f',
              padding: '15px 20px',
              borderRadius: '4px',
              textAlign: 'center',
              margin: '20px 0'
            }}>
              ⚠️ Error loading Menu: {menuError}
            </div>
          )}
          {!menuLoading && !menuError && (
            <>
              <div className="row">
                {visibleMenu.map((item, index) => (
                  <div className="col-md-3" key={index}>
                    <Card postId={item.id} title={item.title} desc={item.desc} image={item.image} button={item.button} />
                  </div>
                ))}
              </div>
              {filteredMenuItems.length > visibleMenuCount && (
                <div style={{ textAlign: 'center', marginTop: '12px' }}>
                  <button
                    onClick={() => setVisibleMenuCount(c => c + 5)}
                    style={{
                      backgroundColor: '#3e2723',
                      color: 'beige',
                      border: 'none',
                      padding: '10px 18px',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

    </div>
  )
}

export default Home