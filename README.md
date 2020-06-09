# How to make THIS 
## Step 1 (React Intro and Project Setup)
1. Make Directory
    ```
    mkdir intro-to-react-and-firebase && cd intro-to-react-and-firebase
    ```

2. Init NPM and GIT
    ```
    npm init -y && git init 
    ```

3. Install react and react-dom
    ```
    npm i --save react@16.11.0 react-dom@16.11.0
    ```

4. Install required depedencies
    ```
    npm i --save-dev @babel/core@7.7.2 @babel/plugin-proposal-class-properties@7.7.0 @babel/preset-env@7.7.1 @babel/preset-react@7.7.0 parcel-bundler@1.12.4
    ```

5. Create file with name ".babelrc" and write this code
    ```
    {
        "presets": [
            "@babel/env",
            "@babel/react"
        ],
        "plugins": [
            "@babel/plugin-proposal-nullish-coalescing-operator",
            "@babel/plugin-proposal-optional-chaining",
            "@babel/plugin-proposal-class-properties"
        ]
    }
    ```

6. Add ".gitignore" to keep clean and nice code
    ```
    node_modules
    .cache
    dist
    ```

7. Create file "index.html" in directory
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>React Blog Application</title>
        <link rel="stylesheet" type="text/css" href="./index.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script src="./src/index.js"></script>
    </body>
    </html>
    ```

8. Create file "index.css" in directory

9. Create folder with name "src" and "components" && inside folder "src" create file with name "index.js"

10. Add script parcel into "package.json"
    ```
    "start": "parcel index.html"  
    ```

11. Install this depedencies 
    ```
    npm i -D react-hot-loader
    ```
    and add this to ".babelrc" plugins
    ```
    "react-hot-loader/babel"
    ```

12. Add this code in "src/index.js"
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';

    if(module.hot){
        module.hot.accept()
    }

    const App = (props) => {
        return(
            <div>
                <h1>Hello from inside React</h1>
            </div>
        )
    }

    const rootElement = document.getElementById('root')

    ReactDOM.render(<App />, rootElement)
    ```

## Step 2 (Creating the blog posts component)

1. Create file in "components" folder with name "App.jsx" and write this code 

    ```jsx
    import React from 'react'

    function App(props){
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }

    export default App;
    ```

    And change "./src/index.js" like this code 
    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from '../components/App'

    if(module.hot){
        module.hot.accept()
    }

    const rootElement = document.getElementById('root')

    ReactDOM.render(<App />, rootElement)
    ```

2. Create file in "components" folder with name "Posts.jsx" and write this code

    ```jsx
    import React from 'react'
    import {PageHeader} from 'antd'
    import Post from './Post'
    import api from '../mock_api'
    import _ from 'lodash'

    function Posts(props) {
        return (
            <div className="posts_container">
                <div className="page_header_container">
                    <PageHeader
                        style={{
                            border: '1px solid rgb(235, 237, 240)',
                        }}
                        title="Title"
                    />
                </div>
                
                <div className="articles_container">
                    {
                        _.map(api, (article) => {
                            return (
                                <Post title={article.title} content={article.content} />
                            )
                        })
                    }
                </div>
            </div> 
        )
    }

    export default Posts;
    ```

    And import in "App.jsx"
    ```
    import Posts from './Posts'
    ```

    don't forget to call it 
    ```html
    <div>
        <Posts />
    <div>
    ```

3. Add this to index.css

    ```css
    html, body{
        width: 100%;
        height: 100%;
    }

    .app_container{
        width: 100%;
        margin: 0px auto;
        margin-top: 20px;
    }
    ```

4. Create new file with name "Post.jsx" in "component" directory and add this code
    ```jsx
    import React from 'react'
    import { Card } from 'antd'

    const Post = (props) => {
        return (
            <div className="article_container">
                <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title={props.title}
                    extra={<a href="#">More</a>}
                >
                    <p className="article_content">
                        {props.content}
                    </p>
                </Card>
            </div>
        )
    }

    export default Post

    ```

5. Create new file with name "mock_api.js" in directory folder and write this code 
    ```js
    const api = [
        {
            "title" : "1 Title",
            "content" : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, aut esse illum necessitatibus, molestias aliquam odio corporis est cum laborum sapiente officia impedit quidem voluptate, harum modi error quaerat eos!`
        },
        {
            "title" : "2 Title",
            "content" : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, aut esse illum necessitatibus, molestias aliquam odio corporis est cum laborum sapiente officia impedit quidem voluptate, harum modi error quaerat eos!`
        },
        {
            "title" : "3 Title",
            "content" : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, aut esse illum necessitatibus, molestias aliquam odio corporis est cum laborum sapiente officia impedit quidem voluptate, harum modi error quaerat eos!`
        },
        {
            "title" : "4 Title",
            "content" : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, aut esse illum necessitatibus, molestias aliquam odio corporis est cum laborum sapiente officia impedit quidem voluptate, harum modi error quaerat eos!`
        },
        {
            "title" : "5 Title",
            "content" : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, aut esse illum necessitatibus, molestias aliquam odio corporis est cum laborum sapiente officia impedit quidem voluptate, harum modi error quaerat eos!`
        },
    ]

    export default api;
    ```