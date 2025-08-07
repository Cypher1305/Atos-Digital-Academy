export const normalize = (value: string): string => {
  return value
    .trim()
    .replace(/\s+/g, ' ')                         
    .normalize('NFD')                            
    .replace(/[\u0300-\u036f]/g, '')              
    .toLowerCase();                               
};
