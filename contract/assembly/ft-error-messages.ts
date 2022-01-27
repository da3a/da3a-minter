export const ERR_INVALID_AMOUNT = 'Amount must be greater than zero'
export const ERR_INVALID_ACCOUNT = 'Account not found in registry'
export const ERR_INVALID_ACCOUNT_ID = 'Account Id is not valid'
export const ERR_INVALID_ESCROW_ACCOUNT = 'Escrow account not found in registry'
export const ERR_INSUFFICIENT_BALANCE = 'Account does not have enough balance for this transaction'
export const ERR_INSUFFICIENT_ESCROW_BALANCE = 'Escrow account does not have enough allowance for this transaction'
export const ERR_TOKEN_ALREADY_MINTED = 'Token has previously been minted'
export const ERR_INCREMENT_ALLOWANCE_OWNER = 'Can not increment allowance for yourself'
export const ERR_DECREMENT_ALLOWANCE_OWNER = 'Can not decrement allowance for yourself'
export const ERR_DECREMENT_LESS_THAN_ZERO = 'Amount will decrease allowance amount below zero'
export const ERR_NOT_OWNER = 'You are not the owner, only owner can do this'
export const ERR_NOT_ENOUGH_TOKENS = 'You are trying to burn more tokens than you have'
export const ERR_NOT_AUTH_MODERATOR_ADD = 'This account is not authorized to add moderators'
export const ERR_NOT_AUTH_MODERATOR_REMOVE = 'This account is not authorized to remove moderators'
export const ERR_SEND_YOURSELF = 'You cannot send yourself tokens'
export const ERR_POSITIVE = 'Number must be greater than zero'