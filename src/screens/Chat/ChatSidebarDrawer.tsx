import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import ChatSidebar from './ChatSidebar';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
};

const ChatSidebarDrawer = ({ isOpen, onClose, userId }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onClose} size='full'>
      <DrawerOverlay>
        <DrawerContent pt={0} bg='#e8e8e8'>
          <DrawerCloseButton color='white' pt={3} fontSize='lg' />
          <ChatSidebar userId={userId} />
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default ChatSidebarDrawer;
