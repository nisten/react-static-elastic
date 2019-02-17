
import universal, { setHasBabelPlugin } from '/Users/jag/work/react-static-elastic/node_modules/react-universal-component/dist/index.js'


setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
}

const t_0 = universal(import('../src/pages/404.tsx'), universalOptions)
const t_1 = universal(import('../src/pages/about.tsx'), universalOptions)
const t_2 = universal(import('../src/pages/blog.tsx'), universalOptions)
const t_3 = universal(import('../src/containers/Post'), universalOptions)
const t_4 = universal(import('../src/pages/index.tsx'), universalOptions)


// Template Map
export default {
  '../src/pages/404.tsx': t_0,
'../src/pages/about.tsx': t_1,
'../src/pages/blog.tsx': t_2,
'../src/containers/Post': t_3,
'../src/pages/index.tsx': t_4
}

export const notFoundTemplate = "../src/pages/404.tsx"
