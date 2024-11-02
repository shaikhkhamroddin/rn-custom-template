import {createAsyncThunk} from '@reduxjs/toolkit';
import {User} from '../../models/User';
import {ApiService} from '../../ApiService';
import { getErrorMessage } from '../../../utils/message/Message';

export const fetchUser = createAsyncThunk<
  User,
  string,
  {rejectValue: string | undefined}
>('api/fetchUser', async (id, {rejectWithValue}) => {
  try {
    const res = await ApiService.getUser(id);
    return res;
  } catch (err: any) {
    let errormsg: string = getErrorMessage(err);
    return rejectWithValue(errormsg);
  }
});
