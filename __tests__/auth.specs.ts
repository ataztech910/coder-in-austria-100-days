import configureMockStore from 'redux-mock-store';
import { authSlice } from "@/app/store/slices/authSlice";
import { useDispatch } from "react-redux";
const mockStore = configureMockStore();

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

describe('Authorisation tests', () => {
    let store: any;

    beforeEach(() => {
        store = mockStore({});
        // @ts-ignore
        useDispatch.mockReturnValue(store.dispatch);
    });

    it('should create an action to log in', () => {
        const credentials = {
            authState: true,
            user: {
                username: 'TestUser'
            }
        };

        const { setAuthState } = authSlice.actions;
        store.dispatch(setAuthState(credentials));
        const actions = store.getActions();
        const expectedAction = [
            {
                "payload": credentials,
                "type": "auth/setAuthState"
            }
        ];

        expect(actions).toEqual(expectedAction);
    });
})