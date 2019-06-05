import { Virama } from '../src/index';

const zgText: string = 'ျပည္ေထာင္စု သၾကၤန္';
const uniText: string = 'ပြည်ထောင်စု သင်္ကြန်';

test('Is MyanmarText: true', () => {
  expect(Virama.isMyanmarText(uniText)).toBe(true);
});

test('Is MyanmarText: false', () => {
  expect(Virama.isMyanmarText('uniText')).toBe(false);
});

test('Zawgyi To Uni', () => {
  expect(Virama.zg2uni(zgText)).toBe(uniText);
});

test('En To Uni', () => {
  expect(Virama.zg2uni('Myanmar')).toBe('Myanmar');
});

test('Uni To Zawgyi', () => {
  expect(Virama.uni2zg(uniText)).toBe(zgText);
});

test('Eng To Zawgyi', () => {
  expect(Virama.uni2zg('Myanmar')).toBe('Myanmar');
});

// in cmd result is alway zawgyi
test('Broser font',()=>{
  expect(Virama.getBrowserFont()).toBe('Zawgyi');
});

test('isUnicodeUser',()=>{
  expect(Virama.isUnicodeUser()).toBe(false);
});

test('Writing Text',()=>{
  expect(Virama.textToWrite(zgText)).toBe(uniText);
});

test('Writing eng Text',()=>{
  expect(Virama.textToWrite('English text')).toBe('English text');
});

test('Reading Text',()=>{
  expect(Virama.textToRead(uniText)).toBe(zgText);
});

test('Init Re Check',()=>{
  expect(Virama.init()).resolves;
});