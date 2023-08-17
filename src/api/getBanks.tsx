
export const getBanks = async () => {
    const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
    const banks = await response.json();
    return banks;
}