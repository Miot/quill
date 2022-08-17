import lineHeightIcon from '../assets/icons/line-height.svg';

import Picker from './picker';

class LineHeightPicker extends Picker {
  constructor(select, label) {
    super(select);
    this.label.innerHTML = lineHeightIcon;
  }
}

export default LineHeightPicker;