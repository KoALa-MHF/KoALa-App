import { gql } from 'apollo-angular';

const GET_SESSIONS = gql`
  query GetSessions {
    sessions {
      id
      name
      description
      status
      start
      end
      editable
      enablePlayer
      displaySampleSolution
      enableLiveAnalysis
      code
      userSessions {
        id
      }
      media {
        id
        name
        mimeType
        createdAt
        updatedAt
      }
      toolbars {
        id
        markers
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

const GET_ONE_SESSION = gql`
  query GetOneSession($sessionId: Int!) {
    session(id: $sessionId) {
      id
      name
      description
      status
      start
      end
      editable
      enablePlayer
      displaySampleSolution
      enableLiveAnalysis
      code
      media {
        id
        name
        mimeType
        createdAt
        updatedAt
      }
      toolbars {
        id
        markers
        createdAt
        updatedAt
      }
      userSessions {
        id
        user {
          email
        }
      }
      createdAt
      updatedAt
    }
  }
`;

const GET_MARKERS = gql`
  query GetMarkers($ids: [Int!]) {
    markers(ids: $ids) {
      id
      name
      abbreviation
      description
      color
      icon
      createdAt
      updatedAt
      type
    }
  }
`;
