import { Content } from './content';

test('deve ser possivel criar conteudo da notificacao', () => {
  const content = new Content('Voce tem uma nova notificacao');

  expect(content).toBeTruthy();
});

test('nao deve ser possivel criar conteudo com menos de 5 caracteres', () => {
  expect(() => new Content('voc')).toThrow();
});

test('nao deve ser possivel criar conteudo com mais de 100 caracteres', () => {
  expect(() => new Content('f'.repeat(101))).toThrow();
});
