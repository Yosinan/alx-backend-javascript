export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;

    const add = (newNeighborhood) => {
        this.sanFranciscoNeighborhoods.push(newNeighborhood);
        return this.sanFranciscoNeighborhoods;
    };

    this.addNeighborhood
}