import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../components/Button/Button';

storiesOf('Button/basic', module)
  .add('with text', () => <Button>Text Button</Button>)
  .add('with emoji', () => <Button>😀 😎 👍 💯</Button>)
  .add('disabled', () => <Button disabled>Disabled Button</Button>);

storiesOf('Button/color', module)
  .add('primary', () => <Button color={'is-primary'}>Primary Button</Button>)
  .add('link', () => <Button color={'is-link'}>Link Button</Button>)
  .add('info', () => <Button color={'is-info'}>Info Button</Button>)
  .add('success', () => <Button color={'is-success'}>Success Button</Button>)
  .add('warning', () => <Button color={'is-warning'}>Warning Button</Button>)
  .add('danger', () => <Button color={'is-danger'}>Danger Button</Button>);

storiesOf('Button/size', module)
  .add('small', () => <Button size={'is-small'}>Small Button</Button>)
  .add('medium', () => <Button size={'is-medium'}>Medium Button</Button>)
  .add('large', () => <Button size={'is-large'}>Large Button</Button>);

storiesOf('Button/modifiers', module)
  .add('outlined', () => (
    <Button color={'is-primary'} modifiers={['is-outlined']}>
      Outlined Button
    </Button>
  ))
  .add('loading', () => <Button modifiers={['is-loading']}>Loading Button</Button>);
