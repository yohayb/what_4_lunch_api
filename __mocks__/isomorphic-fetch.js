let returnResponse = {};

const isomorphicFetch = jest.fn(() => {
    return returnResponse
});

isomorphicFetch.__setReturnResponse = r => {
    return returnResponse = r;
};

export default isomorphicFetch;
