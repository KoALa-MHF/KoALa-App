import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateMediaInput = {
  /** Media Composer */
  composer: Scalars['String'];
  /** Media Title */
  title: Scalars['String'];
  /** Media Type */
  type: MediaType;
};

export type CreateSessionInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  /** Media Composer */
  composer: Scalars['String'];
  /** Creation Date */
  createdAt: Scalars['DateTime'];
  /** ID for Media */
  id: Scalars['Int'];
  /** Media Title */
  title: Scalars['String'];
  /** Media Type */
  type: MediaType;
  /** Date of Last Update */
  updatedAt: Scalars['DateTime'];
};

export enum MediaType {
  Audio = 'AUDIO'
}

export type Mutation = {
  __typename?: 'Mutation';
  createMedia: Media;
  createSession: Session;
  removeMedia: Media;
  removeSession: Session;
  setMedia: Session;
  updateMedia: Media;
  updateSession: Session;
};


export type MutationCreateMediaArgs = {
  createMediaInput: CreateMediaInput;
};


export type MutationCreateSessionArgs = {
  createSessionInput: CreateSessionInput;
};


export type MutationRemoveMediaArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveSessionArgs = {
  id: Scalars['Int'];
};


export type MutationSetMediaArgs = {
  id: Scalars['Int'];
  mediaId: Scalars['Int'];
};


export type MutationUpdateMediaArgs = {
  id: Scalars['Int'];
  updateMediaInput: UpdateMediaInput;
};


export type MutationUpdateSessionArgs = {
  updateSessionInput: UpdateSessionInput;
};

export type Query = {
  __typename?: 'Query';
  allMedia: Array<Media>;
  media: Media;
  session: Session;
  sessions: Array<Session>;
};


export type QueryMediaArgs = {
  id: Scalars['Int'];
};


export type QuerySessionArgs = {
  id: Scalars['Int'];
};

export type Session = {
  __typename?: 'Session';
  /** Creation Date */
  createdAt: Scalars['DateTime'];
  /** Description */
  description: Scalars['String'];
  /** ID for Session */
  id: Scalars['Int'];
  /** Associated Media File */
  media?: Maybe<Media>;
  /** Session Name */
  name: Scalars['String'];
  /** Date of Last Update */
  updatedAt: Scalars['DateTime'];
};

export type UpdateMediaInput = {
  /** Media Composer */
  composer: Scalars['String'];
  /** Media Title */
  title: Scalars['String'];
  /** Media Type */
  type: MediaType;
};

export type UpdateSessionInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CreateNewSessionMutationVariables = Exact<{
  session: CreateSessionInput;
}>;


export type CreateNewSessionMutation = { __typename?: 'Mutation', createSession: { __typename?: 'Session', id: number, name: string, description: string } };

export type UpdateSessionMutationVariables = Exact<{
  session: UpdateSessionInput;
}>;


export type UpdateSessionMutation = { __typename?: 'Mutation', updateSession: { __typename?: 'Session', id: number, name: string, description: string } };

export type DeleteSessionMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteSessionMutation = { __typename?: 'Mutation', removeSession: { __typename?: 'Session', id: number } };

export type GetSessionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSessionsQuery = { __typename?: 'Query', sessions: Array<{ __typename?: 'Session', id: number, name: string, description: string, createdAt: any, updatedAt: any }> };

export type GetOneSessionQueryVariables = Exact<{
  sessionId: Scalars['Int'];
}>;


export type GetOneSessionQuery = { __typename?: 'Query', session: { __typename?: 'Session', id: number, name: string, description: string, createdAt: any, updatedAt: any } };

export const CreateNewSessionDocument = gql`
    mutation createNewSession($session: CreateSessionInput!) {
  createSession(createSessionInput: $session) {
    id
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateNewSessionGQL extends Apollo.Mutation<CreateNewSessionMutation, CreateNewSessionMutationVariables> {
    override document = CreateNewSessionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSessionDocument = gql`
    mutation updateSession($session: UpdateSessionInput!) {
  updateSession(updateSessionInput: $session) {
    id
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSessionGQL extends Apollo.Mutation<UpdateSessionMutation, UpdateSessionMutationVariables> {
    override document = UpdateSessionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteSessionDocument = gql`
    mutation deleteSession($id: Int!) {
  removeSession(id: $id) {
    id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteSessionGQL extends Apollo.Mutation<DeleteSessionMutation, DeleteSessionMutationVariables> {
    override document = DeleteSessionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetSessionsDocument = gql`
    query GetSessions {
  sessions {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetSessionsGQL extends Apollo.Query<GetSessionsQuery, GetSessionsQueryVariables> {
    override document = GetSessionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetOneSessionDocument = gql`
    query GetOneSession($sessionId: Int!) {
  session(id: $sessionId) {
    id
    name
    description
    createdAt
    updatedAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetOneSessionGQL extends Apollo.Query<GetOneSessionQuery, GetOneSessionQueryVariables> {
    override document = GetOneSessionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }