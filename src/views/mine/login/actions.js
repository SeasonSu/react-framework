const initialState = {
  articleList: []
}

const LOAD_ARTICLES = 'LOAD_ARTICLES'
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS'
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR'

export function loadArticles(date) {
  return {
    types: [
      LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR
    ],
    url: '/meeting/list'
  }
}

export function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0)
        ? state + 1
        : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default function PreviewList(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLES:
      {
        return {
          ...state
        }
      }

    case LOAD_ARTICLES_SUCCESS:
      {
        return {
          ...state,
          articleList: action.payload.list
        }
      }

    case LOAD_ARTICLES_ERROR:
      {
        return {
          ...state
        }
      }

    default:
      return state
  }
}
