export interface DropdownMenuProps {
  anchorEl: null | HTMLElement;
  setAnchorEl: (anchorEl: null | HTMLElement) => void;
  selectedOption: { text: string; icon: JSX.Element };
  setSelectedOption: (value: { text: string; icon: JSX.Element }) => void;
}
