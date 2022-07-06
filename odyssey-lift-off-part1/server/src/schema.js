const { gql } = require('apollo-server');

const typeDefs = gql`
  """
  엔트리 포인트 역할을 하는 타입
  어떤 쿼리를 날릴 수 있을지 정의
  """
  type Query {
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
module.exports = typeDefs;
