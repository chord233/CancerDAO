import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/hooks/use-wallet';
import { Wallet, LogOut, ExternalLink } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export function WalletButton() {
  const { 
    address, 
    isConnected, 
    isLoading, 
    error, 
    balance, 
    connectWallet, 
    disconnectWallet, 
    formatAddress 
  } = useWallet();

  const [showError, setShowError] = useState(false);

  const handleConnect = async () => {
    await connectWallet();
    if (error) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const openEtherscan = () => {
    if (address) {
      window.open(`https://etherscan.io/address/${address}`, '_blank');
    }
  };

  if (!isConnected) {
    return (
      <div className="relative">
        <Button 
          variant="outline"
          size="sm"
          onClick={handleConnect}
          disabled={isLoading}
          className="flex items-center gap-2 border-purple-200 text-purple-700 hover:bg-purple-50"
        >
          <Wallet className="h-4 w-4" />
          {isLoading ? 'Connecting...' : 'Connect Wallet'}
        </Button>
        {showError && error && (
          <div className="absolute top-full left-0 mt-2 bg-red-100 border border-red-200 text-red-700 px-3 py-2 rounded-md text-sm z-50 whitespace-nowrap">
            {error}
          </div>
        )}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-green-200 text-green-700 hover:bg-green-50"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          {formatAddress(address)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <div className="px-3 py-2">
          <div className="text-sm font-medium">Wallet Address</div>
          <div className="text-xs text-gray-600 font-mono">{address}</div>
        </div>
        {balance && (
          <div className="px-3 py-2">
            <div className="text-sm font-medium">Balance</div>
            <div className="text-xs text-gray-600">{parseFloat(balance).toFixed(4)} ETH</div>
          </div>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={openEtherscan} className="flex items-center gap-2">
          <ExternalLink className="h-4 w-4" />
          View on Etherscan
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={disconnectWallet} className="flex items-center gap-2 text-red-600">
          <LogOut className="h-4 w-4" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}