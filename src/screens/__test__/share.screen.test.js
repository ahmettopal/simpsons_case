import react from 'react';
import Share from '../Share';
import Home from '../Home';
import { render } from '@testing-library/react-native';

describe('share screen', () => {
    it('should go share screen', () => {
        const navigation = { navigate: () => { } }
        spyOn(navigation, 'navigate');

        const page = render(<Home navigation={navigation} />);

        const shareButon = page.getByTestId('shareButon');

        fireEvent.press(shareButon);

        expect(navigation.navigate).toHaveBeenCalledWidth("Share")
    })

    it('should go home screen with values', () => {
        const navigation = { navigate: () => { } }
        spyOn(navigation, 'navigate');

        const page = render(<Share navigation={navigation} />);

        const addButon = page.getByTestId('addButon');

        fireEvent.press(addButon);

        expect(page.queryAllByTestId("validation").length).toEqual(1);
    })
})