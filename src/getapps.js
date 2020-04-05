import {gql} from "apollo-boost";

export const GETAPPS = gql`
    {
    apps{
        _id
        name
        description
        stack {
            name
            url
        }
        screenshot
        url
        deploy
        quickstart
    }
}`;
