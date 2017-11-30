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
