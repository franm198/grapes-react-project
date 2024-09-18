// import { render, screen, fireEvent } from '@testing-library/react';
// import Navigation from './Navigation';

// describe('Navigation component', () => {
//   test('calls filter function when Red Wine button is clicked', () => {
//     const handleFilterRedWines = jest.fn();
//     render(
//       <Navigation
//         getYearFromButton={() => {}}
//         wines={[]}
//         setFilteredWines={() => {}}
//         setWines={() => {}}
//         whiteWine={[]}
//         redWine={[]}
//         sparklingWine={[]}
//         regions={[]}
//         handleRegionFilter={() => {}}
//       />
//     );

//     const redWineButton = screen.getByText('Red');
//     fireEvent.click(redWineButton);

//     expect(handleFilterRedWines).toHaveBeenCalledTimes(1);
//   });
// });