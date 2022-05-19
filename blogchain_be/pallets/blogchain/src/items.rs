pub use super::*;

pub use frame_support::{
    pallet_prelude::*,
    codec::{Encode, Decode},
    traits::{Currency, ExistenceRequirement, Get, ReservableCurrency, WithdrawReasons}
 };
use scale_info::{ TypeInfo };
use frame_support::inherent::Vec;

pub type NftIndex = u32;
pub type StorageIndex = u32;
pub type AccountIdOf<T> = <T as frame_system::Config>::AccountId;
pub type BalanceOf<T> = <<T as Config>::Currency as Currency<AccountIdOf<T>>>::Balance;
pub type BlockNumberOf<T> = <T as frame_system::Config>::BlockNumber;

#[derive(Clone, Encode, Decode, PartialEq, RuntimeDebug, TypeInfo)]
#[scale_info(skip_type_params(T))]
pub struct SomethingElt<T: Config> {
    pub account_id: AccountIdOf<T>,
    pub valuation: BalanceOf<T>,
    pub content: Vec<u8>,
    pub timestamp: BlockNumberOf<T>
}

