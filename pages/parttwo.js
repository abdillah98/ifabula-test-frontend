import {useEffect, useState, useCallback} from 'react'
import {Container} from '../components'

const initialDummy = [	
	{edit: false, name: 'Abdillah'},
	{edit: false, name: 'Anna'},
	{edit: false, name: 'Ikke'},
	{edit: false, name: 'Luanna'},
]	

const userAuth = {
	username: '@abdillah',
	password: '123456'
}
const initialUserAuth = {
	username: '',
	password: ''
}

export default function partTwo() {
	const [dummy, setDummy] = useState(initialDummy)
	const [posts, setPosts] = useState([])
	const [auth, setAuth] = useState(initialUserAuth)
	const [authStatus, setAuthStatus] = useState(false)
	const [sha256, setSha256] = useState('')

	const _getPosts =  async () => {
		const request = await fetch('http://jsonplaceholder.typicode.com/posts');
		const response = await request.json()
		setPosts(response.slice(0, 10))
	}

	const _getAuthLocalStorage = async () => {
		const request = localStorage.getItem("userAuth");
		const response = JSON.parse(request)
		if(response) {
			setAuthStatus(true)
			setAuth(response)
		}
	}

	const _sha256 = async (message) => {
	    // encode as UTF-8
	    const msgBuffer = new TextEncoder().encode(message);                    

	    // hash the message
	    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

	    // convert ArrayBuffer to Array
	    const hashArray = Array.from(new Uint8Array(hashBuffer));

	    // convert bytes to hex string                  
	    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
	    console.log(hashHex)
	    // return hashHex;
	}

	useEffect(() => {
		_getAuthLocalStorage();
		_getPosts();
		_sha256('01022023abdillahpriaifabula');
	}, [])

	useEffect(() => {
		console.log('~ No. 1')
		console.log(dummy)
	}, [dummy])

	useEffect(() => {
		console.log('~ No. 3')
		console.log(posts)
	}, [posts])

	useEffect(() => {
		console.log('~ No. 9')
		console.log(authStatus)
	}, [authStatus])

	return (
		<Container>		
			<div className="p-4">
			  <h1 className="text-4xl font-bold mb-6">Bagian #2: Soal Utama</h1>
			  <SectionOne 
			  	dummy={dummy} 
			  	setDummy={setDummy}
			  />
			  <SectionTwo 
			  	posts={posts} 
			  	setPosts={setPosts}
			  />
			  <SectionThree 
			  	string="01022023abdillahpriaifabula" 
			  	value={sha256}
			  />
			  <SectionFour />
			  <SectionFive 
			  	auth={auth} 
			  	setAuth={setAuth} 
			  	authStatus={authStatus} 
			  	setAuthStatus={setAuthStatus} 
			  	userAuth={userAuth} />
			</div>
			<SectionSix />
		</Container>
	)
}

function SectionOne({dummy, setDummy}) {
	return (
		<div className="mb-10">
		  <div className="mb-2">
		    <span className="text-primary font-bold">#</span>
		    <span>Jawaban no. 1 dan 2:</span>
		  </div>
		  <div className="border-[1px] border-slate-300 rounded-lg p-4">
		    {dummy.map((row, index) =>
		    	<div key={index} className="flex items-center pb-2">
		    		<span className="mr-4">{index + 1}.</span> 
		    		<input 
		    			type="text" 
		    			className={`px-2 py-1 mr-2 ${row.edit ? 'border-[2px] border-primary' : ''}`} 
		    			value={row.name} 
		    			onChange={(e) => setDummy(prev => 
		    				prev.map((item, _index) => 
		    					_index === index ?
		    					{...item, name: e.target.value} :
		    					item
		    				)
		    			)}
		    		/>
		    		<span 
		    			className={`px-2 py-1 bg-slate-100 cursor-pointer ${row.edit ? 'hidden' : ''}`} 
		    			onClick={() => setDummy(prev => 
		    				prev.map((item, _index) => 
		    					_index === index ?
		    					{...item, edit: true} :
		    					item
		    				)
		    			)}
		    		>
		    			Edit
		    		</span> 
		    		<span 
		    			className={`px-2 py-1 bg-slate-100 cursor-pointer ${!row.edit ? 'hidden' : ''}`} 
		    			onClick={() => setDummy(prev => 
		    				prev.map((item, _index) => 
		    					_index === index ?
		    					{...item, edit: false} :
		    					item
		    				)
		    			)}
		    		>
		    			Simpan
		    		</span> 
		    	</div>
		    )}
		  </div>
		</div>
	)
}

function SectionTwo({posts, setPosts}) {
	return (
	  <div className="mb-10">
	    <div className="mb-2">
	      <span className="text-primary font-bold">#</span>
	      <span>Jawaban no. 3, 4, 5 dan 6:</span>
	    </div>
	    <div className="border-[1px] border-slate-300 rounded-lg p-4">
		    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
		    	{posts.map((post, index) =>
		    		<div key={index} className="flex flex-col justify-between items-start bg-slate-100 p-4 mb-2">
		    			<div className="font-medium mb-4">
		    				{post.title > 100 ? `${post.title.substring(0, 100)}...` : post.title}
		    			</div>
		    			<div key={index} className="text-slate-500 font-sm mb-4">
		    			 {post.body.substring(0, 50)}
		    			</div>
			    		<span 
			    			className="px-2 py-1 bg-slate-200 text-center text-red-500 hover:bg-red-500 hover:text-white cursor-pointer" 
			    			onClick={() => setPosts(prev => 
			    				prev.filter(item => item.id !== post.id) 
			    			)}
			    		>
			    			Hapus
			    		</span>
		    		</div>
		    	)}
		    </div>
	    </div>
	  </div>
	)
}

function SectionFour() {
	return (
		<div className="mb-10">
		  <div className="mb-2">
		    <span className="text-primary font-bold">#</span>
		    <span>Jawaban no. 8:</span>
		  </div>
		  <div className="border-[1px] border-slate-300 rounded-lg p-4">
		  	<ul>
		  		<li>1. Kurang koma antar object index array ke 1 ke index 2 (Line 23)</li>
		  		<li>2. Kurang tutup petik dua pada object key "attribute" (Line 429)</li>
		  		<li>3. value pada object key "attribute" tidak terisi  (Line 438)</li>
		  		<li>4. index pada array "cleanA" pada for scope tidak terdefinisi (Line 541)</li>
		  		<li>5. Kesalan nama attribut key pada param "b". Harusnya "b.attribute" bukan  "b.attributes" (Line 528)</li>
		  	</ul>
			</div>
		</div>
	)
}

function SectionFive({auth, setAuth, authStatus, setAuthStatus, userAuth}) {
	return (
	  <div className="mb-10">
	    <div className="mb-2">
	      <span className="text-primary font-bold">#</span>
	      <span>Jawaban no. 9:</span>
	    </div>
	    <div className="border-[1px] border-slate-300 rounded-lg p-4">
	    	<div className="mx-auto w-[100%] md:w-[40%] border-[1px] border-slate-300 rounded-lg p-4">
		    	{
		    		!authStatus ?
		    		<div>
		    			<div className="text-xl font-bold text-center">Login</div>
		    			<label className="block mb-2" htmlFor="username">Username</label>
		    			<input
		    				className="p-2 bg-slate-100 rounded-lg block mb-4 w-full" 
		    				id="username"
		    				type="text" 
		    				placeholder="@abdillah"
		    				value={auth.username}
		    				onChange={(e) => setAuth({...auth, username: e.target.value})}
		    			/>
		    			<label className="block mb-2" htmlFor="password">Password</label>
		    			<input
		    				className="p-2 bg-slate-100 rounded-lg block mb-4 w-full" 
		    				id="password"
		    				type="password" 
		    				placeholder="******"
		    				value={auth.password}
		    				onChange={(e) => setAuth({...auth, password: e.target.value})}
		    			/>
		    			<button 
		    				type="button" 
		    				className="p-2 text-center bg-primary text-white w-full rounded-lg"
		    				onClick={() => {
		    					if(!auth.username || !auth.password) {
		    						alert('Username atau password tidak boleh kosong!')
		    						return;
		    					}
		    					else if(auth.username !== userAuth.username) {
		    						alert('Username salah!')
		    						return;
		    					}
		    					else if(auth.password !== userAuth.password) {
		    						alert('Password salah!')
		    						return;
		    					}

		    					localStorage.setItem("userAuth", JSON.stringify(auth));
		    					setAuthStatus(true)
		    				}}
		    			>
		    				Login
		    			</button>
		  			</div> :
		  			<div>
		  				<div className="text-center mb-4">Selamat Datang {auth?.username}</div>
			  			<button 
			  				type="button" 
			  				className="p-2 text-center bg-primary text-white w-full rounded-lg"
			  				onClick={() => {
			  					localStorage.removeItem("userAuth");
			  					setAuthStatus(false)
			  				}}
			  			>
			  				Logout
			  			</button>
		  			</div>
		    	}
	  		</div>
	  	</div>
	  </div>
	)
}

function SectionThree({string, value}) {
	return (
		<div className="mb-10">
		  <div className="mb-2">
		    <span className="text-primary font-bold">#</span>
		    <span>Jawaban no. 7:</span>
		  </div>
		  <div className="border-[1px] border-slate-300 rounded-lg p-4">
		  	<div>String: {string}</div>
		  	<div>sha256 encript: {value}</div>
			</div>
		</div>
	)
}

function SectionSix() {
	return (
		<div className="mb-10">
		  <div className="mb-2">
		    <span className="text-primary font-bold">#</span>
		    <span>Jawaban no. 10 dan 11:</span>
		  </div>
		  <div className="border-[1px] border-slate-300 rounded-lg p-4">
		  	Untuk jawaban no 10 dan 11 marupakan bagian Backend.
			</div>
		</div>
	)
}