import { composeStories } from '@storybook/react';
import * as stories from './TextField.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('TextField', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
